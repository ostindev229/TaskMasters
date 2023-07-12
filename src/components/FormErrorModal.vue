<template>
  <div class="form-error-modal">
    <div class="modal-dialog " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Error!</h5>
          <button @click="closeModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Please fill in the input field and the description field!☹️</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { emit } = getCurrentInstance();

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.form-error-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
   position: fixed;
  top: 0;
  left: 0;
   background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  width: 500px;
}

.modal-content {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-header {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.modal-title {
  margin: 0;
}

.modal-body {
  padding: 10px;
}

.modal-footer {
  padding: 10px;
  text-align: right;
  border-top: 1px solid #ccc;
}

.btn {
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
