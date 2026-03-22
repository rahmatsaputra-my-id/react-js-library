import { colors, withOpacity } from "@rahmatsaputra-my-id/global-assets/dist/COLORS";

export const styles = {
  container: {
    borderRadius: 8,
    paddingRight: 16,
    border: `2px solid ${withOpacity(colors.brown, 0.6)}`,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  containerImage: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: colors.gray,
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
