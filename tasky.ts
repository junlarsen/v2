import Tasky, { task } from '../../packages/core'
import GitPlugin, { Git } from '../../packages/git'
import NPMPlugin, { NPM } from '../../packages/npm'

Tasky
    .use('npm', NPMPlugin)
    .use('git', GitPlugin)
    .task
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