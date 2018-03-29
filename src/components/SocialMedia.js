import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { css, injectGlobal } from 'emotion'
import styled from 'react-emotion'

import { rhythm } from '../utils/typography'

export default class SocialMedia extends React.Component {
  render() {
    const userDatas = {
      name: 'Ömer',
      surname: 'Mindivanli',
      avatar: 'https://avatars0.githubusercontent.com/u/24420843?s=40&v=4',
    }
    const styles = {
      div: {
        display: 'flex',
        marginBottom: 0,
      },
      ul: {
        backgroundColor: 'red',
      },
      li: {
        display: 'inline',
        paddingLeft: '15px',
      },
    }
    const className = css`
      width: 60px;
      height: 60px;
      margin-left: 10px;
    `
    const anotherClassName = css`
      display: inline;
      padding-left: 15px;
    `
    return (
      <div style={styles.div}>
        <ul>
          <li style={styles.li}>
            <a href="https://twitter.com/MindivanliOmer">
              <img
                className={className}
                src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
              />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://www.linkedin.com/in/%C3%B6mer-mindivanli-a02b3552/">
              <img
                className={className}
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              />
            </a>
          </li>
          <li className={anotherClassName}>
            <a href="https://github.com/omermindivanli">
              <img
                className={className}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png"
              />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
