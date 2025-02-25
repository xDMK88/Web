import store from '@/store/index.js'
import { computed } from 'vue'

const selectedTask = computed(() => store.state.tasks.selectedTask)

export function createTaskMessage (obj) {
  if ('uid_task' in obj && selectedTask.value && obj.uid_task === selectedTask.value.uid) {
    console.log('we need to add message into task chat')
    store.commit('CREATE_MESSAGE_REQUEST', obj.obj)
  }
}

export function removeTaskMessage (obj) {
  if ('uid_task' in obj && selectedTask.value && obj.uid_task === selectedTask.value.uid) {
    const data = { uid: obj.obj.uid, key: 'deleted', value: 1 }
    store.commit('TASK_CHANGE_MESSAGE', data)
  }
}
