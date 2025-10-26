import { Colors } from '../../constants/Colors';

export const styles = {
  cardWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  cardBox: {
    backgroundColor: Colors.whiteTransparent,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.red200,
  },
  cardTitle: {
    color: Colors.red200,
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 1,
    marginBottom: 4,
  },
  cardDescription: {
    color: Colors.red200,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 1,
  },
};
