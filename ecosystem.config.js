module.exports = {
  apps: [{
    name: 'bits',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-52-210-47-124.eu-west-1.compute.amazonaws.com',
      key: '~/.ssh/node.pem',
      ref: 'origin/master',
      repo: 'git@github.com:abbareg/bits.git',
      path: '/home/ec2-user/bits',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}