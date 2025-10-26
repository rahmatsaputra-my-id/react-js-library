import {Colors} from '../../constants/Colors';

export const styles = {
  container: {
    borderRadius: 8,
    paddingRight: 16,
    border: `2px solid ${Colors.brownTransparent}`,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  containerImage: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: Colors.grey1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    justifyContent: 'center',
    marginLeft: 16,
    flex: 1,
  },
  label: {
    marginBottom: 4,
  },
  image: {
    width: '100%',
    height: undefined,
    maxHeight: 80,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  iconCamera: {
    width: 32,
    height: '100%',
    alignSelf: 'center',
  },
  iconEdit: {
    width: 24,
    height: '100%',
    alignSelf: 'center',
    marginRight: 16,
  },
};
