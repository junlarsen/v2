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
    })
    .task<NPM>('npm', (npm) => {
        npm.install()
        npm.runScript('build')
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