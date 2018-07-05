import { StaffingModule } from './staffing.module';

describe('StaffingModule', () => {
  let staffingModule: StaffingModule;

  beforeEach(() => {
    staffingModule = new StaffingModule();
  });

  it('should create an instance', () => {
    expect(staffingModule).toBeTruthy();
  });
});
