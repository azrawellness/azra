import { firebaseAdmin } from '../../../firebase-admin'

export default async function handler(req, res) {
  try {
    const { uid } = req.query
    console.log(uid, 6)
    if (uid) {
      if (req.method === 'PUT') {
        const { displayName, email, password, disabled } = req.body
        await firebaseAdmin
          .auth()
          .updateUser(uid, {
            email,
            emailVerified: true,
            password,
            displayName,
            disabled,
          })
          .then((userRecord) => {
            res.status(201).json({ user: userRecord })
          })
          .catch((error) => {
            res.status(500).json({ error })
          })
      }

      if (req.method === 'POST') {
        const { displayName, email, password, disabled } = req.body
        await firebaseAdmin
          .auth()
          .createUser({
            email,
            emailVerified: true,
            password,
            displayName,
            disabled,
          })
          .then((userRecord) => {
            res.status(201).json({ user: userRecord })
          })
          .catch((error) => {
            res.status(500).json({ error })
          })
      }

      if (req.method === 'DELETE') {
        await firebaseAdmin
          .auth()
          .deleteUser(uid)
          .then(() => {
            res.status(200).json({ message: 'User deleted successfully' })
          })
          .catch((error) => {
            res.status(500).json({ error })
          })
      }

      if (req.method === 'GET') {
        let user = null
        await firebaseAdmin
          .auth()
          .getUser(uid)
          .then((userRecord) => {
            user = userRecord
          })
          .catch((error) => {
            console.log('Error listing users:', error)
          })

        res.status(200).json({ user })
      }
    } else {
      res.status(500).json({ error: 'No user id sent!!' })
    }
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
