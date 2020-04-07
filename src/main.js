import shell from 'shelljs'

async function main () {
  shell.exec(`sudo rm -rf ${process.env['GITHUB_WORKSPACE']}`)
}

main()
