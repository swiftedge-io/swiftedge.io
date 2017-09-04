import React from 'react';
import Filter from './Filter';
import FilterInput from './FilterInput';
import FilterToogle from './FilterToogle';


export default class EmailFilters extends React.Component {
  constructor(props) {
    super(props);

    this.handleBookmarkToogle = this.handleBookmarkToogle.bind(this);
    this.handleUnBookmarkToogle = this.handleUnBookmarkToogle.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleCompanyInput = this.handleCompanyInput.bind(this);
  }

  handleBookmarkToogle() {
    this.props.onChange({
      ...this.props.filters,
      showBookmarked: !this.props.filters.showBookmarked
    });
  }

  handleUnBookmarkToogle() {
    this.props.onChange({
      ...this.props.filters,
      showUnBookmarked: !this.props.filters.showUnBookmarked
    });
  }

  handleNameInput(e) {
    this.props.onChange({
      ...this.props.filters,
      name: e.target.value
    });
  }

  handleEmailInput(e) {
    this.props.onChange({
      ...this.props.filters,
      email: e.target.value
    });
  }

  handleCompanyInput(e) {
    this.props.onChange({
      ...this.props.filters,
      company: e.target.value
    });
  }

  render() {
    return (
      <Filter>
        <FilterToogle
          side={this.props.filters.showBookmarked ? 'left' : 'right'}
          leftMessage="show bookmark"
          rightMessage="hide bookmark"
          onToggle={this.handleBookmarkToogle}
        />
        <FilterToogle
          side={this.props.filters.showUnBookmarked ? 'left' : 'right'}
          leftMessage="show un-bookmark"
          rightMessage="hide un-bookmark"
          onToggle={this.handleUnBookmarkToogle}
        />
        <FilterInput
          name="name"
          label="name"
          value={this.props.filters.name}
          onChange={this.handleNameInput}
        />
        <FilterInput
          name="email"
          label="email"
          value={this.props.filters.email}
          onChange={this.handleEmailInput}
        />
        <FilterInput
          name="company"
          label="company"
          value={this.props.filters.company}
          onChange={this.handleCompanyInput}
        />
      </Filter>
    );
  }
}
