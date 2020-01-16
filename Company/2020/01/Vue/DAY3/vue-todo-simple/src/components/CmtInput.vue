<template>
  <div class="input-group input-group-sm">
    <span class="input-group-addon">Comment</span>
    <input type="text" class="form-control" placeholder="Type your message here..">
    <span class="input-group-btn">
            <button id="clearMessageButton" class="btn btn-default" type="button">Clear</button>
            <button id="sendMessageButton" class="btn btn-primary" type="button"><i class="fa fa-send"></i>Send</button>
        </span>
    <span class="input-group-btn">
            <button id="undoSendButton" class="btn btn-default" type="button" disabled><i class="fa fa-undo"></i>Undo</button>
        </span>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .input-group{
    border-bottom: 1px dotted #ccc;
    padding-bottom: 20px;
  }
  #undoSendButton {
    margin-left: 10px;
    border-radius: 3px;
  }

  #clearMessageButton {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  #sendMessageButton {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
