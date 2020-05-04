import React from 'react'
import PropTypes from 'prop-types'

const ReSelect = ({ options=[], className }) => {
    const displayOptions = options.map(el => {
        return (
            <div>
                {el.text}
            </div>
        )
    })
    return (
        <div>
            <div className={`recomponent-select ${className}`}>
                {displayOptions}
            </div>
            <select></select>
        </div>
    )
}

ReSelect.propTypes = {

}

export default ReSelect
