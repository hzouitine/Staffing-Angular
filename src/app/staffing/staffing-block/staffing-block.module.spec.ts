import { StaffingBlockModule } from './staffing-block.module';

describe('StaffingBlockModule', () => {
  let staffingBlockModule: StaffingBlockModule;

  beforeEach(() => {
    staffingBlockModule = new StaffingBlockModule();
  });

  it('should create an instance', () => {
    expect(staffingBlockModule).toBeTruthy();
  });
});
