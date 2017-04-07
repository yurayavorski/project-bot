import { ProjectBotPage } from './app.po';

describe('project-bot App', () => {
  let page: ProjectBotPage;

  beforeEach(() => {
    page = new ProjectBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
