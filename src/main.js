import * as exec from '@actions/exec'

async function main() {
  await exec.exec(`sudo rm -rf ${process.env['GITHUB_WORKSPACE']}`)
}

main()
