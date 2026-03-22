import { colors } from "@rahmatsaputra-my-id/global-assets";

export const styles = {
  cardWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  cardBox: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.red,
  },
  cardTitle: {
    color: colors.red,
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 1,
    marginBottom: 4,
  },
  cardDescription: {
    color: colors.red,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 1,
  },
};
