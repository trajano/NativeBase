import AvatarMain from './Avatar';
import AvatarBadge from './Badge';
import AvatarGroup from './Group';
export type { IAvatarProps, IAvatarBadgeProps } from './types';
import type { IAvatarComponentType } from './types';

let AvatarTemp: any = AvatarMain;
AvatarTemp.Badge = AvatarBadge;
AvatarTemp.Group = AvatarGroup;

// To add typings
const Avatar = AvatarTemp as IAvatarComponentType;
export { Avatar };
