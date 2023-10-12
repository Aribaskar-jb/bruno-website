import Head from 'next/head';
import { IconBrandApple, IconBrandWindows, IconBrandUbuntu, IconBrandChrome, IconBrandDocker, IconDeviceDesktop } from "@tabler/icons";
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GlobalStyle from '../globalStyles';

export default function Downloads() {
  return (
    <div className="container flex flex-col root downloads-page" style={{fontFamily: 'Inter', maxWidth: '1024px'}}>
      <Head>
        <title>Downloads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <main className="flex flex-grow flex-col notebase-app px-4">
        <Navbar />

        <h1 className="mt-4 text-2xl font-bold leading-tight w-full">
          Downloads
        </h1>

        <Tabs className="mt-2">
          <TabList className="flex mt-8 space-x-4">
            <Tab className="px-4 py-2 bg-gray-200 flex items-center rounded-md cursor-pointer hover:bg-gray-300">
              <IconBrandApple className="text-gray-500 mr-2 icon" size={24} strokeWidth={2}/>Mac
            </Tab>
            <Tab className="px-4 py-2 bg-gray-200 flex items-center rounded-md cursor-pointer hover:bg-gray-300">
              <IconDeviceDesktop className="text-gray-500 mr-2 icon" size={24} strokeWidth={2}/>Linux
            </Tab>
            <Tab className="px-4 py-2 bg-gray-200 flex items-center rounded-md cursor-pointer hover:bg-gray-300">
              <IconBrandWindows className="text-gray-500 mr-2 icon" size={24} strokeWidth={2}/>Windows
            </Tab>
          </TabList>

          <TabPanel>
            <div className="overflow-x-auto relative">
              <h1 className="text-xl font-bold leading-tight w-full">Binaries</h1>

              <table className="text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Platform
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac x64</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_x64_mac.dmg" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac x64 (Portable)</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_x64_mac.zip" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac Apple Silicon</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_arm64_mac.dmg" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandApple className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Mac Apple Silicon (Portable)</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_arm64_mac.zip" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="overflow-x-auto relative">
              <h1 className="text-xl font-bold leading-tight w-full">Binaries</h1>
              <table className="text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Platform
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandUbuntu className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Ubuntu / Debian</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_amd64_linux.deb" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconDeviceDesktop className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Linux AppImage</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_x86_64_linux.AppImage" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="overflow-x-auto relative">
              <h1 className="text-xl font-bold leading-tight w-full">Binaries</h1>
              <table className="text-left text-gray-500 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Platform
                    </th>
                    <th scope="col" className="py-3 pl-6 pr-10">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_x64_win.exe" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>

                  <tr className="bg-white border-b">
                    <td scope="row" className="py-2 pl-6 pr-10 flex items-center font-medium text-gray-900 whitespace-nowrap">
                      <IconBrandWindows className="text-gray-500" size={24} strokeWidth={2}/><span className="label ml-2">Windows x64 (Portable)</span>
                    </td>
                    <td className="py-3 pl-6 pr-10">
                    <a href="https://github.com/usebruno/bruno/releases/download/v0.23.0/bruno_0.23.0_x64_win.zip" target="_blank" rel="noreferrer" className='link'>
                      Download
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>

        <div className='mt-6'>
          The release notes along with the release and source artifacts can be found under in the <a href="https://github.com/usebruno/bruno/releases" target="_blank" rel="noreferrer" className='link'>GitHub release</a>
        </div>
      </main>
      <Footer/>
    </div>
  );
};
