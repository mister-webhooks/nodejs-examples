const { Command } = require('commander')
const { MisterWebhooksConsumer } = require('@mister-webhooks/client')
const fs = require('fs')

const program = new Command()

const readProfile = (file) => {
  try {
    const fileContents = fs.readFileSync(file, 'utf-8')
    return JSON.parse(fileContents)
  } catch {
    console.error('Cannot read ' + file)
    process.exit(-1)
  }
}

program
  .name('sdk-example-cjs')
  .description('Example CLI for using the Mister Webhooks client')
  .requiredOption('-t, --topic <topic>', 'Topic to subscribe to')
  .requiredOption('-f, --file <path>', 'Path to connection profile')

program.parse()

const options = program.opts()
const profile = readProfile(options.file)

const consumer = new MisterWebhooksConsumer({
  config: profile,
  topic: options.topic,
  handler: async (value) => {
    console.log(JSON.stringify(value, null, 2))
  },
  manualStart: true,
})

consumer.on('mrw.connected', () => {
  console.log('connected')
})
consumer.on('mrw.crashed', (err) => {
  console.log('crashed', err)
})
consumer.on('mrw.disconnected', () => {
  console.log('disconnected')
})
consumer.on('mrw.stopped', () => {
  console.log('stopped')
})
consumer.on('mrw.error', (err) => {
  console.error('error', err)
})

async function main() {
  consumer.start()
}

main().catch(console.error)
