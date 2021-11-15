import React, { useState } from 'react'
import { Avatar, IconButton, Container } from '@mui/material'
import { AttachFile, LocalPhone, PhotoCamera, Send } from '@material-ui/icons'
import { useHarmonyStyles } from './style'
import { styled } from '@mui/material/styles'
//import { ChatService } from 'src/social/services/ChatService'
import { ChatService } from '@xrengine/client-core/src/social/services/ChatService'
//import { ChatService } from '../../../social/services/ChatService'
//import { useDispatch } from 'src/store'
import { useDispatch } from '@xrengine/client-core/src/store'

const Input = styled('input')({
  display: 'none'
})

const MessageBox: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const [composingMessage, setComposingMessage] = useState('')

  const composingMessageChangedHandler = (event: any): void => {
    const message = event.target.value
    setComposingMessage(message)
  }

  const classes = useHarmonyStyles()

  const packageMessage = (): void => {
    if (composingMessage.length > 0) {
      console.log(`dispach message ${composingMessage}`)
      dispatch(
        ChatService.createMessage({
          text: composingMessage
        })
      )
      console.log(`done dispatching message ${composingMessage}`)
      setComposingMessage('')
    }
  }

  //   {
  //     "id": "d5206d80-4499-11ec-bf97-7105055dd807",
  //     "name": "",
  //     "createdAt": "2021-11-13T15:53:23.000Z",
  //     "updatedAt": "2021-11-13T15:53:23.000Z",
  //     "instanceId": null,
  //     "locationId": null,
  //     "partyUsers": [
  //         {
  //             "id": "d53777f0-4499-11ec-bf97-7105055dd807",
  //             "isOwner": true,
  //             "isInviteAccepted": false,
  //             "createdAt": "2021-11-13T15:53:23.000Z",
  //             "updatedAt": "2021-11-13T15:53:25.000Z",
  //             "partyId": "d5206d80-4499-11ec-bf97-7105055dd807",
  //             "userId": "6d17b430-4482-11ec-bf97-7105055dd807",
  //             "user": {
  //                 "id": "6d17b430-4482-11ec-bf97-7105055dd807",
  //                 "name": "Guest #851",
  //                 "avatarId": "Allison",
  //                 "inviteCode": null,
  //                 "createdAt": "2021-11-13T13:05:51.000Z",
  //                 "updatedAt": "2021-11-13T15:53:24.000Z",
  //                 "userRole": "guest",
  //                 "instanceId": null,
  //                 "channelInstanceId": null,
  //                 "partyId": "d5206d80-4499-11ec-bf97-7105055dd807"
  //             }
  //         }
  //     ]
  // }

  //   {
  //     "id": "d5206d80-4499-11ec-bf97-7105055dd807",
  //     "name": "",
  //     "createdAt": "2021-11-13T15:53:23.000Z",
  //     "updatedAt": "2021-11-13T15:53:23.000Z",
  //     "instanceId": null,
  //     "locationId": null,
  //     "partyUsers": [
  //         {
  //             "id": "d53777f0-4499-11ec-bf97-7105055dd807",
  //             "isOwner": true,
  //             "isInviteAccepted": false,
  //             "createdAt": "2021-11-13T15:53:23.000Z",
  //             "updatedAt": "2021-11-13T15:53:25.000Z",
  //             "partyId": "d5206d80-4499-11ec-bf97-7105055dd807",
  //             "userId": "6d17b430-4482-11ec-bf97-7105055dd807",
  //             "user": {
  //                 "id": "6d17b430-4482-11ec-bf97-7105055dd807",
  //                 "name": "Guest #851",
  //                 "avatarId": "Allison",
  //                 "inviteCode": null,
  //                 "createdAt": "2021-11-13T13:05:51.000Z",
  //                 "updatedAt": "2021-11-13T15:53:24.000Z",
  //                 "userRole": "guest",
  //                 "instanceId": null,
  //                 "channelInstanceId": null,
  //                 "partyId": "d5206d80-4499-11ec-bf97-7105055dd807"
  //             }
  //         }
  //     ]
  // }

  return (
    <>
      <div className={`${classes.dFlex} ${classes.justifyContentBetween} ${classes.p2}`}>
        <h2>Laura Palmeri</h2>
        <LocalPhone fontSize="small" />
      </div>
      <Container>
        <div className={`${classes.dFlex} ${classes.flexColumn} ${classes.justifyContentBetween} ${classes.h100}`}>
          <div className={`${classes.dFlex} ${classes.flexColumn} ${classes.my2}`}>
            <div className={`${classes.selfStart}`}>
              <div className={classes.dFlex}>
                <Avatar src="./Avatar.png" />
                <div className={`${classes.bgBlack} ${classes.mx2}`}>
                  <p>If you already have the Chrome extension installed, it should autoupdate within the next week. </p>
                </div>
              </div>
            </div>
            <div className={classes.selfEnd}>
              <div className={classes.dFlex}>
                <div className={`${classes.bgInfo} ${classes.mx2}`}>
                  <p>
                    You can also head to chrome://extensions and click “Update extensions now” if you’d like to get the
                    new version today.
                  </p>
                </div>
                <Avatar src="./Avatar.png" />
              </div>
            </div>
          </div>
          <div className={`${classes.dFlex} ${classes.justifyContentBetween} ${classes.alignCenter}`}>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton aria-label="upload picture" component="span">
                <AttachFile className={classes.white} />
              </IconButton>
            </label>
            <div className={classes.flexGrow}>
              <div className={`${classes.dFlex} ${classes.alignCenter}`}>
                <Avatar src="./Avatar.png" />
                <textarea
                  className={classes.formControl}
                  placeholder="Your message"
                  onChange={composingMessageChangedHandler}
                ></textarea>
              </div>
            </div>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton onClick={packageMessage} aria-label="upload picture" component="span">
                <Send className={classes.white} />
              </IconButton>
            </label>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MessageBox
