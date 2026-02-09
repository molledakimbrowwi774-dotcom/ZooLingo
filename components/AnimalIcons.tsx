
import React from 'react';

interface IconProps {
  className?: string;
}

export const LionCool: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#FEF3C7" />
    {/* Mane */}
    <circle cx="50" cy="45" r="32" fill="#D97706" />
    {/* Suit Jacket */}
    <path d="M25 90C25 90 30 70 50 75C70 70 75 90 75 90H25Z" fill="#1F2937" />
    {/* Shirt */}
    <path d="M42 75L50 85L58 75H42Z" fill="#FFFFFF" />
    {/* Tie */}
    <path d="M50 85L45 78H55L50 85V90" stroke="#DC2626" strokeWidth="4" />
    {/* Face */}
    <circle cx="50" cy="45" r="20" fill="#FCD34D" />
    {/* Sunglasses Frame */}
    <line x1="33" y1="42" x2="67" y2="42" stroke="#111827" strokeWidth="2" />
    {/* Left Lens */}
    <path d="M33 42H48L46 50C44 52 35 52 33 50V42Z" fill="#111827" />
    <path d="M35 44L40 44" stroke="#374151" strokeWidth="1" opacity="0.5" />
    {/* Right Lens */}
    <path d="M52 42H67V50C65 52 56 52 54 50L52 42Z" fill="#111827" />
    <path d="M54 44L59 44" stroke="#374151" strokeWidth="1" opacity="0.5" />
    {/* Nose */}
    <path d="M47 56L50 59L53 56H47Z" fill="#000" />
    {/* Mouth */}
    <path d="M50 59V62" stroke="#000" strokeWidth="1" />
    <path d="M45 62Q50 65 55 62" stroke="#000" strokeWidth="1" fill="none" />
  </svg>
);

export const OwlDr: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#E5E7EB" />
    {/* Body */}
    <path d="M30 90C30 70 35 40 50 40C65 40 70 70 70 90H30Z" fill="#9CA3AF" />
    {/* White Coat */}
    <path d="M35 90V60C35 60 40 55 50 55C60 55 65 60 65 60V90H35Z" fill="#FFFFFF" />
    <path d="M50 55V90" stroke="#E5E7EB" strokeWidth="1" />
    {/* Head */}
    <circle cx="50" cy="35" r="22" fill="#9CA3AF" />
    {/* Eyes */}
    <circle cx="42" cy="32" r="8" fill="#FFF" />
    <circle cx="58" cy="32" r="8" fill="#FFF" />
    <circle cx="42" cy="32" r="3" fill="#000" />
    <circle cx="58" cy="32" r="3" fill="#000" />
    {/* Monocle */}
    <circle cx="58" cy="32" r="10" stroke="#F59E0B" strokeWidth="2" fill="none" />
    <path d="M68 32Q75 40 70 50" stroke="#F59E0B" strokeWidth="1" fill="none" />
    {/* Beak */}
    <path d="M50 40L47 45H53L50 40Z" fill="#F59E0B" />
  </svg>
);

export const RabbitGirl: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#FCE7F3" />
    {/* Ears */}
    <path d="M40 40C35 20 35 5 45 10C50 15 45 35 45 35" fill="#FFF" stroke="#E5E7EB" />
    <path d="M60 40C65 20 65 5 55 10C50 15 55 35 55 35" fill="#FFF" stroke="#E5E7EB" />
    {/* Head */}
    <circle cx="50" cy="50" r="25" fill="#FFF" />
    {/* Dress */}
    <path d="M30 90L40 70H60L70 90H30Z" fill="#EC4899" />
    {/* Straps */}
    <line x1="42" y1="70" x2="42" y2="80" stroke="#FFF" strokeWidth="2" />
    <line x1="58" y1="70" x2="58" y2="80" stroke="#FFF" strokeWidth="2" />
    {/* Bow */}
    <path d="M40 25L50 30L60 25L50 20L40 25Z" fill="#EC4899" />
    {/* Face */}
    <circle cx="43" cy="48" r="2" fill="#000" />
    <circle cx="57" cy="48" r="2" fill="#000" />
    <path d="M48 53Q50 55 52 53" stroke="#000" strokeWidth="1" />
  </svg>
);

export const FoxGentleman: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#FFEDD5" />
    {/* Head */}
    <path d="M30 35L40 60L50 70L60 60L70 35L50 45L30 35Z" fill="#EA580C" />
    <path d="M40 60L50 70L60 60" fill="#FFF" />
    {/* Top Hat */}
    <rect x="35" y="20" width="30" height="20" fill="#1F2937" />
    <rect x="30" y="38" width="40" height="5" fill="#1F2937" />
    {/* Tie */}
    <path d="M50 70L45 80L50 90L55 80L50 70Z" fill="#3B82F6" />
    {/* Suit */}
    <path d="M30 90V75L50 70L70 75V90H30Z" fill="#374151" z-index="-1" />
    {/* Face Details */}
    <circle cx="43" cy="55" r="2" fill="#000" />
    <circle cx="57" cy="55" r="2" fill="#000" />
    <circle cx="50" cy="65" r="3" fill="#000" />
  </svg>
);

export const BearChef: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#FEF3C7" />
    {/* Ears */}
    <circle cx="35" cy="40" r="8" fill="#78350F" />
    <circle cx="65" cy="40" r="8" fill="#78350F" />
    {/* Head */}
    <circle cx="50" cy="50" r="25" fill="#92400E" />
    {/* Snout */}
    <ellipse cx="50" cy="55" rx="10" ry="8" fill="#FDE68A" />
    <circle cx="50" cy="53" r="3" fill="#000" />
    {/* Chef Hat */}
    <path d="M35 30C35 20 45 10 50 10C55 10 65 20 65 30H35Z" fill="#FFF" stroke="#D1D5DB" />
    <rect x="35" y="30" width="30" height="5" fill="#FFF" stroke="#D1D5DB" />
    {/* Apron */}
    <path d="M35 90V75H65V90H35Z" fill="#EF4444" />
    <path d="M40 75L40 65H60L60 75" fill="#EF4444" />
  </svg>
);

export const CatNurse: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#ECFEFF" />
    {/* Head */}
    <path d="M30 35L35 65Q50 75 65 65L70 35L50 45L30 35Z" fill="#E5E7EB" />
    {/* Ears */}
    <path d="M30 35L40 45" stroke="#9CA3AF" />
    <path d="M70 35L60 45" stroke="#9CA3AF" />
    {/* Nurse Cap */}
    <path d="M35 30L40 15H60L65 30H35Z" fill="#FFF" stroke="#D1D5DB" />
    <path d="M45 22H55M50 17V27" stroke="#EF4444" strokeWidth="2" />
    {/* Scarf */}
    <path d="M35 65Q50 75 65 65L65 75Q50 85 35 75Z" fill="#F472B6" />
    {/* Face */}
    <circle cx="42" cy="50" r="2" fill="#000" />
    <circle cx="58" cy="50" r="2" fill="#000" />
    <path d="M48 55Q50 57 52 55" stroke="#000" />
    <path d="M35 52H25M75 52H65" stroke="#9CA3AF" />
  </svg>
);

export const PandaStudent: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#F0FDF4" />
    {/* Ears */}
    <circle cx="30" cy="35" r="8" fill="#000" />
    <circle cx="70" cy="35" r="8" fill="#000" />
    {/* Head */}
    <circle cx="50" cy="50" r="25" fill="#FFF" />
    {/* Eye Patches */}
    <ellipse cx="40" cy="48" rx="6" ry="8" fill="#000" transform="rotate(-30 40 48)" />
    <ellipse cx="60" cy="48" rx="6" ry="8" fill="#000" transform="rotate(30 60 48)" />
    <circle cx="40" cy="48" r="2" fill="#FFF" />
    <circle cx="60" cy="48" r="2" fill="#FFF" />
    {/* Nose */}
    <ellipse cx="50" cy="55" rx="4" ry="3" fill="#000" />
    {/* Cap */}
    <path d="M35 35H65L60 25H40L35 35Z" fill="#3B82F6" />
    <rect x="60" y="32" width="15" height="3" fill="#3B82F6" />
    {/* Backpack Straps */}
    <path d="M30 90V70M70 90V70" stroke="#F59E0B" strokeWidth="4" />
  </svg>
);

export const DogPilot: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#EFF6FF" />
    {/* Ears */}
    <path d="M30 40C20 50 20 70 35 60" fill="#D97706" />
    <path d="M70 40C80 50 80 70 65 60" fill="#D97706" />
    {/* Head */}
    <circle cx="50" cy="50" r="22" fill="#FBBF24" />
    {/* Goggles */}
    <circle cx="42" cy="40" r="8" fill="#93C5FD" stroke="#374151" strokeWidth="2" />
    <circle cx="58" cy="40" r="8" fill="#93C5FD" stroke="#374151" strokeWidth="2" />
    <path d="M50 40H50" stroke="#374151" strokeWidth="2" />
    {/* Snout */}
    <circle cx="50" cy="55" r="6" fill="#FDE68A" />
    <circle cx="50" cy="53" r="3" fill="#000" />
    {/* Jacket */}
    <path d="M30 90V70C30 70 40 80 50 80C60 80 70 70 70 70V90H30Z" fill="#78350F" />
    <path d="M50 80V90" stroke="#FCD34D" strokeWidth="1" />
  </svg>
);

export const KoalaClerk: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#F3F4F6" />
    {/* Ears */}
    <circle cx="25" cy="40" r="10" fill="#9CA3AF" />
    <circle cx="75" cy="40" r="10" fill="#9CA3AF" />
    {/* Head */}
    <circle cx="50" cy="50" r="25" fill="#D1D5DB" />
    {/* Nose */}
    <ellipse cx="50" cy="50" rx="5" ry="8" fill="#374151" />
    {/* Eyes */}
    <circle cx="40" cy="45" r="2" fill="#000" />
    <circle cx="60" cy="45" r="2" fill="#000" />
    {/* Shirt */}
    <path d="M30 90V75H70V90H30Z" fill="#FFF" />
    {/* Folder */}
    <rect x="55" y="70" width="20" height="25" fill="#F59E0B" transform="rotate(-10 55 70)" />
  </svg>
);

export const ElephantTeacher: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#EEF2FF" />
    {/* Ears */}
    <circle cx="25" cy="45" r="15" fill="#9CA3AF" />
    <circle cx="75" cy="45" r="15" fill="#9CA3AF" />
    {/* Head */}
    <circle cx="50" cy="45" r="25" fill="#CBD5E1" />
    {/* Trunk */}
    <path d="M45 55Q50 80 55 55" fill="#CBD5E1" />
    {/* Glasses */}
    <rect x="35" y="40" width="12" height="8" rx="2" stroke="#000" strokeWidth="2" fill="none" />
    <rect x="53" y="40" width="12" height="8" rx="2" stroke="#000" strokeWidth="2" fill="none" />
    <line x1="47" y1="44" x2="53" y2="44" stroke="#000" strokeWidth="2" />
    {/* Stick */}
    <line x1="65" y1="70" x2="80" y2="50" stroke="#78350F" strokeWidth="2" />
    <circle cx="80" cy="50" r="2" fill="#EF4444" />
  </svg>
);

// Map of components
export const AnimalIcons: Record<string, React.FC<IconProps>> = {
  lion_cool: LionCool,
  owl_dr: OwlDr,
  rabbit_girl: RabbitGirl,
  fox_gentleman: FoxGentleman,
  bear_chef: BearChef,
  cat_nurse: CatNurse,
  panda_student: PandaStudent,
  dog_pilot: DogPilot,
  koala_clerk: KoalaClerk,
  elephant_teacher: ElephantTeacher,
};
