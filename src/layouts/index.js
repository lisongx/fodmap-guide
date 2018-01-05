import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#352743',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          FODMAP 指南
        </Link>
      </h1>
    </div>
  </div>
)

const Footer = () => (
  <div
    style={{
      background: '#ddd',
      marginTop: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <ul>
        <li>
          <a
            href="https://www.monashfodmap.com/i-have-ibs/get-the-app/"
            style={{
              color: 'black',
            }}
          >
            莫纳什大学开发FODMAP手机App
          </a>
        </li>
        <li>
          <a
            href="mailto:iseansay@gmail.com"
            style={{
              color: 'black',
            }}
          >
            联络作者
          </a>
        </li>
      </ul>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="FODMAP饮食指南"
      meta={[
        { name: 'description', content: 'FODMAP的中文指南' },
        { name: 'keywords', content: 'FODMAP, 低FODMAP饮食, IBS, 肠易激综合征' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
