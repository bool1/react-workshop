import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import EmailListItem from './EmailListItem';
import {EMAIL_PROP_TYPE} from './constants';

export default class EmailList extends PureComponent {
  static propTypes = {
    emails: PropTypes.arrayOf(EMAIL_PROP_TYPE),
    onItemSelect: PropTypes.func.isRequired
  };

  render() {
    let {emails, onItemSelect} = this.props;
    let emailComponents = emails.map(email =>
      <li key={email.id}>
        <EmailListItem email={email} onSelect={onItemSelect} />
      </li>
    );

    return (
      <ul className="email-list">
        {emailComponents}
      </ul>
    );
  }
}
