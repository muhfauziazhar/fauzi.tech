import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';
import { DEVTO_PROFILE, PROFILE_URL } from '@/common/constant';
import Image from '../../elements/Image';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function ProfileHeader({ expandMenu, imageSize }: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        'flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <Image
        src={PROFILE_URL}
        alt="profile"
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded="rounded-full"
        className="lg:hover:scale-105"
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-md md:text-lg lg:text-xl font-sora font-medium">Muhammad Fauzi Azhar</h2>
        </Link>
      </div>
      <Link
        href={DEVTO_PROFILE}
        target="_blank"
        className="hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300"
      >
        @muhfauziazhar
      </Link>
    </div>
  );
}
