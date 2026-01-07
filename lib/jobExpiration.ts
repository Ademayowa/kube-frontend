/**
 * Calculates the number of days until a job expires (14 days from creation date)
 * @param createdAt ISO date string of when the job was created
 * @returns Number of days until expiration (0 if expired)
 */
export const getDaysUntilExpiration = (createdAt: string): number => {
  const creationDate = new Date(createdAt);
  const today = new Date();

  // Reset time part for accurate day calculation
  today.setHours(0, 0, 0, 0);
  creationDate.setHours(0, 0, 0, 0);

  // Jobs expire 14 days after creation
  const expirationDate = new Date(creationDate);
  expirationDate.setDate(creationDate.getDate() + 14);

  const diffTime = expirationDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays > 0 ? diffDays : 0;
};

/**
 * Formats the expiration message based on days remaining
 * @param daysRemaining Number of days until expiration
 * @returns Formatted expiration message
 */
export const formatExpirationMessage = (daysRemaining: number): string => {
  if (daysRemaining > 1) {
    return `Expires in ${daysRemaining} days`;
  } else if (daysRemaining === 1) {
    return 'Expires tomorrow';
  } else {
    return 'Expires today';
  }
};
