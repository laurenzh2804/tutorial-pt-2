module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ssh -i "ec2-52-15-52-34.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/laurenz-key-pair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:laurenzh2804/tutorial-pt-2.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}