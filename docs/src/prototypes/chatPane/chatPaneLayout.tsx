import * as React from 'react'
import { Flex } from '@stardust-ui/react'
// import { Layout } from '@stardust-ui/react'
import { Props } from 'src/types'
import { ChatData } from './services'

import ChatPaneHeader from './chatPaneHeader'
import ChatPaneContainer from './chatPaneContent'
import ComposeMessage from './composeMessage'

export type ChatPaneLayoutProps = Props<{ chat: ChatData }>

// const ChatPaneLayout: React.FunctionComponent<ChatPaneLayoutProps> = ({ chat }: ChatPaneLayoutProps) => (
//   <Layout
//     vertical
//     start={<ChatPaneHeader chat={chat} />}
//     main={<ChatPaneContainer chat={chat} />}
//     end={<ComposeMessage />}
//     styles={{
//       backgroundColor: '#f3f2f1',
//       left: 0,
//       marginLeft: '250px',
//       width: '50%',
//       height: '100%',
//       position: 'fixed',
//     }}
//   />
// )

const ChatPaneLayout: React.FunctionComponent<ChatPaneLayoutProps> = ({
  chat,
}: ChatPaneLayoutProps) => (
  <Flex
    fill
    column
    styles={{
      backgroundColor: '#f3f2f1',
      // left: 0,
      // marginLeft: '250px',
      width: '50%',
      // height: '100%',
      position: 'absolute',
    }}
  >
    <ChatPaneHeader chat={chat} />
    <ChatPaneContainer chat={chat} />
    <ComposeMessage />
  </Flex>
)

export default ChatPaneLayout
