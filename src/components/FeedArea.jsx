import React, { useEffect, useState } from 'react'
import styles from "../scss/FeedArea.module.scss";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption';
import Post from './Post';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon  from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db, timeStamp } from "../firebase/firebase";

function FeedArea() {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // useState posts
    db.collection("posts").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    )
  }, [])

  const sendPost = (event) => {
    event.preventDefault();

    // useState posts
    db.collection('posts').add({
      name: 'Resister-boy',
      description: 'This is a description',
      message: input,
      photoUrl: '',
      timeStamp: timeStamp
    })

    setInput("")
  }

  return (
    <div className={styles.FeedArea}>
      <div className={styles.FeedArea__inputContainer}>
        <div className={styles.FeedArea__input}>
          <CreateIcon />
          <form>
            <input 
              onChange={event => setInput(event.target.value)} 
              value={input} 
              type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className={styles.FeedArea__inputOptions}>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>
      <div>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl} />
        })}
        <Post 
          name="user" 
          description="It is a description"
          message="Wow, It is working" />
      </div>
    </div>
  );
}

export default FeedArea