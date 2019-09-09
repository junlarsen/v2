import Tasky, { task } from '@tasky/core'
import GitPlugin, { Git } from '@tasky/git'
import NPMPlugin, { NPM } from '@tasky/npm'

Tasky
    .use('npm', NPMPlugin)
    .use('git', GitPlugin)
    .task('custom', async () => {
        await task('rm')
            .addOption('-rf')
            .addArgument('public')
            .execute()

        await task('git')
            .addArgument('reset')
            .addOption('--hard')
            .execute()

        await task('git')
            .addArgument('pull')
            .execute()
    })
    .task<NPM>('npm', async (npm) => {
        await npm.install()
        await npm.runScript('build')
    })
    .task('custom', async () => {
        await task('rm')
            .addOption('-rf')
            .addArgument('public')
            .execute()

        await task('mv')
            .addArgument('build')
            .addArgument('public')
            .execute()
    })
    .run()