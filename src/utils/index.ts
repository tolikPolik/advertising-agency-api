export const getApplicationName = (): string => {
  const raw = process.env.npm_package_name.replaceAll('-', ' ');
  const name = (raw && raw[0].toUpperCase() + raw.slice(1)) || raw;
  return name.replace(/api/g, '').trim();
};
