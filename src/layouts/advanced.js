import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Advanced extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'page.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props} />
                )
            })}
            <div>
                    <h2>Reviews</h2>
                    {_.get(this.props, 'pageContext.frontmatter.review', null) && _.get(this.props, 'pageContext.frontmatter.review', null).map(({ name, rating, message }, index) => (
                        <div key={index}>
                            <h3>{name}</h3>
                            <p>{rating}</p>
                            <p>{review}</p>
                        </div>
                    ))}
                </div>

            </Layout>
        );
    }
}
