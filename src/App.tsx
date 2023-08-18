import { useState } from 'react'
import './App.css'
import data from "../data.json"
import Card from "./Card"
// console.log(data)

function App() {
  const [tagList, setTagList] = useState<Array<string>>([])

  const filteredData = data.filter(item => {
    if (!tagList.length) {
      return tagList
    }
    const tags = new Set([item.role, item.level, ...item.languages, ...item.tools])
    return [...tagList].filter(tag => tags.has(tag)).length >= tagList.length
  })

  return (
    <>
      <div className="header">
        <picture>
          <source media="(min-width:1000px)" srcSet="./images/bg-header-desktop.svg" />
          <img src="./images/bg-header-mobile.svg" alt="background image" />
        </picture>
      </div>
      <main>

        {!!tagList.length && <div className="taglist">
          {tagList.map((tag) => {
            return <div className="tag-container"><span className='tag'>{tag}&nbsp;</span>
              <span className='close' onClick={() => tagRemove(tag)}>X</span></div>
          })}
          {!!tagList.length && <div className='clear' onClick={() => setTagList([])}>Clear</div>}
        </div>
        }
        {filteredData.map((item) => {
          return <Card {...item} key={item.id} setter={tagSetter} />
        })}
      </main>
    </>
  )

  function tagSetter(tag: string): void {
    if (tagList.includes(tag)) {
      return
    }
    setTagList([...tagList, tag])
  }
  function tagRemove(tag: string): void {
    setTagList(
      tagList.filter((item) => item !== tag)
    )
  }
}

export default App
