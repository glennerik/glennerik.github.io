import { useEffect } from "react"
import ReactGA from "react-ga"
import PropTypes from "prop-types"

const isProd = process.env.NODE_ENV === "production"
ReactGA.initialize("UA-107457581-1", { debug: false, testMode: !isProd })

const Analytics = props => {
  useEffect(() => {
    ReactGA.pageview(props.pageName)
  }, [props.pageName])
  return null
}

export default Analytics

Analytics.propTypes = {
  pageName: PropTypes.string.isRequired,
}
