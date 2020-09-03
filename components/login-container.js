import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "~/styles/Login.module.scss";
import { PageHeader } from "antd";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={styles.containerLogin}>
        <div
          className={styles.bgContainer}
          style={{
            background:
              'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("/bg.jpg")',
          }}
        >
          <h1 className={styles.logoText}>Tiar NextJS</h1>
          <div className={styles.logoSubtitle}>Wellcome</div>
        </div>

        <div className={styles.loginCard}>
          <PageHeader
            className={styles.authTitlePage}
            onBack={this.props.onBack}
            title={this.props.title}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func
}

export default LoginContainer;
