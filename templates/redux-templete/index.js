// 这是自动生成的文件，可以修改。

import React, { Component } from 'react'
import inject from '@inject'
import './style.scss'

@inject('template')
class Template extends Component {
	componentDidMount () {

	}

	componentWillUnmount () {
		
	}
	/**
	 * 
	 * 假设有个actions方法叫update,则通过actions().update()调用
	 * 假设在reducer有个store叫list,则通过store().list拿到
	 * 
	 */
	actions = () => this.props.templateActions
	store = () => this.props.templateStore

	render () {
		return (
			<div id="template">
				template
			</div>
		)
	}
}

export default Template
