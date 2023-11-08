

<template>
    <div ref="talkjs" style="width: 1000px; margin: 30px; height: 500px">
      <i>Loading chat...</i>
    </div>
</template>

<script>
    import Talk from 'talkjs';
    export default {
        name: 'Chatbox',
        props: {
            name: String,
            profileImage: String,
          },
        
        data(){
            return{
                currentUser: {
                   id: '123456',  // Replace with the user's ID
                name: 'John Doe',  // Replace with the user's name
                email: 'john@example.com',  // Replace with the user's email
                }
            };
        },
        async mounted() {
          await Talk.ready
          const me = new Talk.User({
            id: this.currentUser.id,
            name: this.currentUser.name,
            email: this.currentUser.email,
            photoUrl: "./profilepicture.jpg",
            welcomeMessage: "Hey there! How are you? :-)",
            role: "booker"
          })
                
          const talkSession = new Talk.Session({
            appId: 'tjfjGqJk',
            me: me,
          });

          const other = new Talk.User({
            id: '654321',
            name: this.name,
            email: 'Sebastian@example.com',
            photoUrl: '/src/assets/Images/Tirsa/' + this.profileImage,
            welcomeMessage: 'Hey, how can I help?',
            role: 'default',
          });

          const conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
          );

          conversation.setParticipant(me);
          conversation.setParticipant(other);

          const popup = talkSession.createPopup();
          popup.select(conversation);

          popup.mount(this.$refs.talkjs);
  
        }
    }
</script>