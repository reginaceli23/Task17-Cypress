// // describe('template spec', () => {
// //   it('passes', () => {
// //     cy.visit('https://example.cypress.io')
// //   })
// // })

// import loginPage from "../../cypress/e2e/orangeHRM/login.cy";

// describe('Login Feature',() => {
//   // User Login with Valid Credentials
//     it('User Login with Valid credentials',() => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername().type('Admin');
//       loginPage.inputPassword().type('admin123');
//       cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("actionSummary");
//       loginPage.buttonLogin().click();
//       cy.wait("@actionSummary");
//       cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
//       });

//   // User Login with Invalid Credentials
//     it('User Login with Invalid Username', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername().type('Adminn'); 
//       loginPage.inputPassword().type('admin1234');
//       cy.intercept("GET","**/core/i18n/messages").as("messages");
//       loginPage.buttonLogin().click();
//       cy.wait('@messages').its('response.statusCode').should('eq', 304);
//       cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
//       });

//   //User Login with Invalid Password
//     it('User Login with Invalid Password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername().type('Admin'); 
//       loginPage.inputPassword().type('user1234');
//       cy.intercept("GET","**/core/i18n/messages").as("messages");
//       loginPage.buttonLogin().click();
//       cy.wait('@messages').its('response.statusCode').should('eq', 304);
//       cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
//       });

//   //User Login with Invalid Username and Invalid Password
//     it('User Login with Invalid Username and Invalid Password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername().type('Adminn'); 
//       loginPage.inputPassword().type('user123456');
//       cy.intercept("GET","**/core/i18n/messages").as("messages");
//       loginPage.buttonLogin().click();
//       cy.wait('@messages').its('response.statusCode').should('eq', 304);
//       cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  
//       });
    
//   // Users Login without input Username and Password
//     it('Users Login without input Username and Password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername();
//       loginPage.inputPassword();
//       loginPage.buttonLogin().click();
//       cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired');  // Memastikan pesan error tampil
//       });
    
//   // User Login with Blank Username and input Valid Password  
//     it('User Login with Blank Username and input Valid Password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername();
//       loginPage.inputPassword().type('admin123');
//       loginPage.buttonLogin().click();
//       cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
//       });

//   // User Login with Input Valid Username and Blank Password    
//     it('User Login with Input Valid Username and Blank Password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername().type('Admin');
//       loginPage.inputPassword();
//       loginPage.buttonLogin().click();
//       cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
//       });
  
//   // User Login with Blank username and Input Invalid password
//     it('User Login with Blank username and Input Invalid password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername();
//       loginPage.inputPassword().type('admin321');
//       loginPage.buttonLogin().click();
//       cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
//       });

//   // User Login with Invalid username and Blank password
//     it('User Login with Inalid username and Blank password', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//       loginPage.textLogin().should('have.text','Login');
//       loginPage.inputUsername().type('Adminnd');
//       loginPage.inputPassword();
//       loginPage.buttonLogin().click();
//       cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
//       });
 
// //   })

// //   // ---------------Fitur Reset Password---------------

// //   describe('Forgot Your Password Feature', () => {

// //       beforeEach(() => {
// //         // Mengunjungi halaman login sebelum setiap test
// //         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// //       });
  
// //     // User Successfull Reset Password with Valid Username
// //       it('User Successfull Reset Password with Valid Username', () => {
// //         // Memastikan tombol 'Forgot your password?' terlihat
// //         cy.contains('Forgot your password?').should('be.visible');
// //         // Klik tombol 'Forgot your password?'
// //         cy.contains('Forgot your password?').click();
// //         // Memastikan halaman pemulihan password terbuka dengan URL yang benar
// //         cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
// //         // Memastikan form reset password terlihat
// //         cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
// //         cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
// //         cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
// //         cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
// //         cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
// //       });

// //     // User Successfull Reset Password with Different Username
// //       it('User Successfull Reset Password with Different Username', () => {
// //           // Memastikan tombol 'Forgot your password?' terlihat
// //           cy.contains('Forgot your password?').should('be.visible');
// //           // Klik tombol 'Forgot your password?'
// //           cy.contains('Forgot your password?').click();
// //           // Memastikan halaman pemulihan password terbuka dengan URL yang benar
// //           cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
// //           // Memastikan form reset password terlihat
// //           cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
// //           cy.get('input[name="username"]').type('Adminn');  // Memastikan input email terlihat dan input email lain
// //           cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
// //           cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
// //           cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
// //       });

// //     // User Cancel for Reset The Password
// //       it('User Cancel for Reset The Password', () => {
// //           // Memastikan tombol 'Forgot your password?' terlihat
// //           cy.contains('Forgot your password?').should('be.visible');
// //           // Klik tombol 'Forgot your password?'
// //           cy.contains('Forgot your password?').click();
// //           // Memastikan halaman pemulihan password terbuka dengan URL yang benar
// //           cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
// //           // Memastikan form reset password terlihat
// //           cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
// //           cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
// //           cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
// //           cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click();
// //           cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
// //       });

// //     // Users Cannot Reset Password without input Username
// //       it('Users Cannot Reset Password without input Username', () => {
// //           // Memastikan tombol 'Forgot your password?' terlihat
// //           cy.contains('Forgot your password?').should('be.visible');
// //           // Klik tombol 'Forgot your password?'
// //           cy.contains('Forgot your password?').click();
// //           // Memastikan halaman pemulihan password terbuka dengan URL yang benar
// //           cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
// //           // Memastikan form reset password terlihat
// //           cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
// //           // Mengisi username kosong
// //           cy.get('[name="username"]')
// //           // Mengklik tombol Reset Password
// //           cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
// //           // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
// //           cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
// //         })
  
// });
