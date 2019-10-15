import PropTypes from "prop-types"

const Header = ({ siteTitle }) => null

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
