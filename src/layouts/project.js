import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }
    componentDidMount() {
        fetch('https://res.cloudinary.com/ajonp/image/list/lft-ducks.json',
            {
                mode: 'cors',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({images: json.resources});
            }
            )
    }
    render() {
        return (
            <Layout {...this.props}>
                <div className="inner outer">
                    <article className="post post-full">
                        <header className="post-header inner-sm">
                            <h1 className="post-title line-top">{_.get(this.props, 'page.title', null)}</h1>
                            {_.get(this.props, 'page.subtitle', null) && (
                                <div className="post-subtitle">
                                    {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                                </div>
                            )}
                        </header>
                        {_.get(this.props, 'page.image', null) && (
                            <div className="post-image">
                                <img src={withPrefix(_.get(this.props, 'page.image', null))} alt={_.get(this.props, 'page.image_alt', null)} />
                            </div>
                        )}
                        <div className="post-content inner-sm">
                            {markdownify(_.get(this.props, 'page.content', null))}
                        </div>
                        {this.state.images.map((image, i) => 
                            <div>alex</div>
                        )}
                    </article>
                </div>
            </Layout>
        );
    }
}
