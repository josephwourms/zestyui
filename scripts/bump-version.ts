#!/usr/bin/env -S deno run --allow-read --allow-write

/**
 * Bumps version numbers in all package deno.json files
 * Usage: deno run --allow-read --allow-write ./scripts/bump-version.ts [patch|minor|major]
 */

interface Version {
  major: number;
  minor: number;
  patch: number;
}

function parseVersion(versionString: string): Version {
  const [major, minor, patch] = versionString.split('.').map(Number);
  return { major, minor, patch };
}

function bumpVersion(version: Version, type: 'patch' | 'minor' | 'major'): Version {
  switch (type) {
    case 'patch':
      return { ...version, patch: version.patch + 1 };
    case 'minor':
      return { ...version, minor: version.minor + 1, patch: 0 };
    case 'major':
      return { ...version, major: version.major + 1, minor: 0, patch: 0 };
  }
}

function versionToString(version: Version): string {
  return `${version.major}.${version.minor}.${version.patch}`;
}

async function updatePackageVersion(
  packagePath: string,
  bumpType: 'patch' | 'minor' | 'major'
): Promise<void> {
  try {
    const denoJsonPath = `${packagePath}/deno.json`;
    const content = await Deno.readTextFile(denoJsonPath);
    const config = JSON.parse(content);

    if (!config.version) {
      console.log(`⏭️  ${packagePath} has no version field, skipping`);
      return;
    }

    const oldVersion = config.version;
    const parsed = parseVersion(oldVersion);
    const bumped = bumpVersion(parsed, bumpType);
    const newVersion = versionToString(bumped);

    config.version = newVersion;

    await Deno.writeTextFile(denoJsonPath, JSON.stringify(config, null, 2) + '\n');
    console.log(`✅ ${packagePath}: ${oldVersion} → ${newVersion}`);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return;
    }
    console.error(`❌ Error updating ${packagePath}:`, error.message);
  }
}

async function main() {
  const bumpType = (Deno.args[0] || 'patch') as 'patch' | 'minor' | 'major';

  if (!['patch', 'minor', 'major'].includes(bumpType)) {
    console.error('Usage: deno run bump-version.ts [patch|minor|major]');
    Deno.exit(1);
  }

  console.log(`\n🔖 Bumping ${bumpType} versions...\n`);

  const packages = [
    'packages/zesty',
    'packages/islands',
    'packages/plugin-vite',
  ];

  for (const pkg of packages) {
    await updatePackageVersion(pkg, bumpType);
  }

  console.log('\n✨ Version bump complete!\n');
}

if (import.meta.main) {
  main().catch(console.error);
}
