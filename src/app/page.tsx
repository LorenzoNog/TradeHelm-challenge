'use client'
import styles from './page.module.css'
import * as React from 'react'
import Button from '../components/controlls/button'
import { Item } from '../item/types'
import api from '@/item/api'
import Modal from '@/components/controlls/modal'
import Input from '@/components/inputs/input'
import List from '@/item/components/list'
import { ListItem } from '@/item/components'

enum Status {
  Init = 'init',
  Success = 'success'
}

interface Form extends HTMLFormElement{
  text : HTMLInputElement
}

const App : React.FC = () =>{
  const [items, setItems] = React.useState<Item[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Init);
  const [isModalVisual, toggleModal] = React.useState<boolean>(false)

  function remove(id : Item['id']){
    api.remove(id).then(() => setItems(items => items.filter(item => item.id !== id )))
  }

  function add(event : React.FormEvent<Form>){
    event.preventDefault()
    const text = event.currentTarget.text.value.trim();
    if(!text) return; 

    api.create(text).then((item)=>{
      setItems(items => items.concat(item))
      toggleModal(false)
    })

  }

  React.useEffect(() => {
    api.list().then((items) =>{
      setItems(items)
      setStatus(Status.Success)
    })
  },[])

  if(status === Status.Init){
    return <span>Loading...</span>
  }

  return(
    <React.Fragment>
        <div>
            <h1 className={styles.h1}>Supermarket list</h1>
            <h3 className={styles.h3}>{items.length} item(s)</h3>
            <List>
              {
                items.map((item) =><ListItem key={item.id} onRemove={()=> remove(item.id)} >
                  {item.text}
                </ListItem>)
              }
            </List>
            <Button autoFocus colorScheme='primary' onClick={()=> toggleModal(true)}>Add</Button>
            {
              isModalVisual && (<Modal onClose={() => toggleModal(false)}>
                  <form onSubmit={add}>
                      <h2 className={styles.h3}>Add item</h2>
                      <Input autoFocus name='text' type='text'/>
                      <nav className={styles.nav}>
                          <button onClick={() => toggleModal(false)} className={styles.buttonModal} type='button'>
                            Cancel
                          </button>
                          <button className={styles.buttonModal} type='submit' >
                              Add
                          </button>
                      </nav>
                  </form>
              </Modal>)
            }
        </div>
    </React.Fragment>
  )
}
export default App
