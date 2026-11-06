export const sampleApps = [
  {
    id: 'app-1',
    name: 'Lumen Studio',
    category: 'Productivity',
    tags: ['design', 'system'],
    description: 'Workspace for design systems and prototypes.'
  },
  {
    id: 'app-2',
    name: 'Signal Desk',
    category: 'Developer',
    tags: ['api', 'analytics'],
    description: 'Observability and signal monitoring dashboard.'
  }
];

export function getApps() {
  return sampleApps;
}

export default sampleApps;
