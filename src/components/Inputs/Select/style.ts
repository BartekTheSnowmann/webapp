import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    textTransform: 'none',
    boxShadow: 'none',
    borderRadius: 13,
    fontSize: '20px',
    minWidth: 80,
    fontWeight: 'normal',
    fontFamily: 'Mukta',
    backgroundColor: colors.invariant.componentBcg,
    padding: '2px 10px',
    '&:hover': {
      backgroundColor: colors.invariant.light
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 90
    }
  },
  tokenName: {
    position: 'relative',
    top: 1,
    color: colors.white.main
  },
  icon: {
    minWidth: 18,
    height: 18,
    marginRight: 6,
    borderRadius: '100%'
  },
  endIcon: {
    width: '2em',
    marginLeft: 6
  }
}))

export default useStyles
