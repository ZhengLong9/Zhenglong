import React from 'react'
import PropTypes from 'prop-types'

const PrimaryButton = ({
    href, target = '_self', label, icon, classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-primary " + classes}>{label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}</a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}

            </button>
        )
    }
}

PrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string

}

const OutlineButton = ({
    href, target = '_self', label, icon, classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-outline " + classes}>{label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}</a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}

            </button>
        )
    }
}

OutlineButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string

}


export {
    PrimaryButton, OutlineButton
}