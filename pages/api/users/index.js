import { firebaseAdmin } from '../../../firebase-admin'

export default async function handler(req, res) {
  try {
    const users = []
    await firebaseAdmin
      .auth()
      .listUsers()
      .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
          users.push(userRecord)
          console.log('user', userRecord.toJSON())
        })
        // if (listUsersResult.pageToken) {
        //   // List next batch of users.
        //   listAllUsers(listUsersResult.pageToken)
        // }
      })
      .catch((error) => {
        console.log('Error listing users:', error)
      })

    res.status(200).json({ users })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
