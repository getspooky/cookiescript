import path from 'path';

module.exports = {
  // Here you may configure as many filesystem "disks" as you wish.
  // Supported Drivers: "local", "s3".
  disks: {
    local: {
      driver: 'local',
      root: path.join(__dirname, '../storage/'),
    },
  },
};