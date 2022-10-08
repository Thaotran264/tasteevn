import React from 'react'
import Layout from "../../components/Layout";
import parse from "html-react-parser";
import { DieuKhoanDichVu } from '../../db';
import Image from "next/image";
import Head from 'next/head';

const DieuKhoanDv = () => {
    return (
        <>
            <Head>
                <title>Điều khoản và dịch vụ của Tastee</title>
                <meta property="og:type" content="og:company" />
                <meta property="og:title" content="Điều khoản và dịch vụ của Tastee" />
                <meta property="og:image" content="https://tastee.vn/_next/image?url=%2Fimage%2FTastee-POS.jpg&w=3840&q=75" />
                <meta property="og:description" content="Chúng tôi có thể chỉnh sửa và bổ sung quy định về các điều khoản bất kỳ lúc nào. Chúng tôi mong rằng bạn sẽ thường xuyên xem lại điều khoản sử dụng để đảm bảo về quyền lợi của bạn trong quá trình sử dụng ứng dụng cũng như các quy định sử dụng và các quy định về thông tin đăng tải." />
                <meta property="og:url" content="https://tastee.vn/dieu-khoan-tastee-pos" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                {/* -- End Open Graph Metadata -- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Chúng tôi có thể chỉnh sửa và bổ sung quy định về các điều khoản bất kỳ lúc nào. Chúng tôi mong rằng bạn sẽ thường xuyên xem lại điều khoản sử dụng để đảm bảo về quyền lợi của bạn trong quá trình sử dụng ứng dụng cũng như các quy định sử dụng và các quy định về thông tin đăng tải." />
                <meta name="twitter:title" content="Điều khoản và dịch vụ của Tastee" />
                <meta name="twitter:site" content="@tastee" />
                <meta name="twitter:image" content="https://tastee.vn/_next/image?url=%2Fimage%2FTastee-POS.jpg&w=3840&q=75" />
                <meta name="twitter:creator" content="@tastee" />
            </Head>
            <div className="container">
                <a href="https://www.facebook.com/groups/tasteepos/" target='_blank'>
                    <Image className="rounded" src={'/image/Tastee-POS.jpg'} alt="First slide" width={2000} height={1000} />
                </a>
                {/* {parse(DieuKhoanDichVu)} */}
                <p><strong>Quy định sử dụng phần mềm</strong></p>
                <p>Kh&aacute;ch h&agrave;ng cần phải đọc v&agrave; đồng &yacute; to&agrave;n bộ điều khoản sử dụng của Tastee POS.</p>
                <p>Ch&uacute;ng t&ocirc;i c&oacute; thể chỉnh sửa v&agrave; bổ sung quy định về c&aacute;c điều khoản bất kỳ l&uacute;c n&agrave;o. Ch&uacute;ng t&ocirc;i mong rằng bạn sẽ thường xuy&ecirc;n xem lại điều khoản sử dụng để đảm bảo về quyền lợi của bạn trong qu&aacute; tr&igrave;nh sử dụng ứng dụng cũng như c&aacute;c quy định sử dụng v&agrave; c&aacute;c quy định về th&ocirc;ng tin đăng tải.</p>
                <p>Trong qu&aacute; tr&igrave;nh sử dụng, nếu kh&aacute;ch h&agrave;ng thực hiện x&oacute;a c&aacute;c th&ocirc;ng tin, h&igrave;nh ảnh li&ecirc;n quan đế t&agrave;i khoản của kh&aacute;ch h&agrave;ng th&igrave; sẽ kh&ocirc;ng thể kh&ocirc;i phục được dữ liệu.</p>
                <p>Trong trường hợp kh&aacute;ch h&agrave;ng x&oacute;a t&agrave;i khoản hoặc x&oacute;a cửa h&agrave;ng th&igrave; mọi th&ocirc;ng tin của kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng được bảo lưu.</p>
                <p><strong>Quyền sử dụng</strong></p>
                <p>Kh&aacute;ch h&agrave;ng c&oacute; thể sử dụng to&agrave;n bộ c&aacute;c chức năng của phần mềm hoặc t&ugrave;y theo thỏa thuận đ&atilde; k&yacute; kết của hợp đồng dịch vụ.</p>
                <p>Kh&aacute;ch h&agrave;ng c&oacute; quyền cập nhật v&agrave; điều chỉnh tất cả th&ocirc;ng tin sau khi đ&atilde; đăng nhập v&agrave;o ứng dụng.</p>
                <p>Kh&aacute;ch h&agrave;ng c&oacute; thể nhờ hỗ trợ tư vấn hoặc xem c&aacute;c hướng dẫn sử dụng phần mềm để hiểu th&ecirc;m về c&aacute;ch sử dụng ứng dụng.</p>
                <p>Kh&aacute;ch h&agrave;ng c&oacute; quyền x&oacute;a t&agrave;i khoản hoặc x&oacute;a cửa h&agrave;ng, trong trường hợp kh&aacute;ch h&agrave;ng x&oacute;a t&agrave;i khoản hoặc cửa h&agrave;ng th&igrave; mọi th&ocirc;ng tin của kh&aacute;ch h&agrave;ng sẽ kh&ocirc;ng được bảo lưu.</p>
                <p><strong>Tr&aacute;ch nhiệm</strong></p>
                <p>Kh&aacute;ch h&agrave;ng kh&ocirc;ng được sử dụng phần mềm với c&aacute;c mục đ&iacute;ch sau:</p>
                <ul>
                    <li>Kh&ocirc;ng được đăng tải c&aacute;c nội dung li&ecirc;n quan đến bạo lực.</li>
                    <li>Kh&ocirc;ng được đăng tải c&aacute;c nội dung li&ecirc;n quan đến khi&ecirc;u d&acirc;m.</li>
                    <li>Kh&ocirc;ng được đăng tải c&aacute;c nội dung với mục đ&iacute;ch lừa đảo, quấy rối hoặc l&agrave;m ảnh hưởng đến uy t&iacute;n, danh dự của người kh&aacute;c.</li>
                    <li>Kh&ocirc;ng l&agrave;m tổn hại, l&agrave;m thương tổn v&agrave; l&agrave;m phiền người kh&aacute;c về con người v&agrave; t&agrave;i sản.</li>
                    <li>Kh&ocirc;ng cố t&igrave;nh ph&aacute; hỏng dịch vụ bằng bất k&igrave; phương tiện m&aacute;y m&oacute;c hoặc phần mềm n&agrave;o.</li>
                    <li>Kh&ocirc;ng vi phạm c&aacute;c quy định của ph&aacute;p luật.</li>
                </ul>
                <p>Trong mọi trường hợp, Tastee POS sẽ kh&ocirc;ng phải chịu tr&aacute;ch nhiệm về những thiệt hại ph&aacute;t sinh từ việc kh&aacute;ch h&agrave;ng sử dụng dịch vụ của b&ecirc;n đối t&aacute;c thứ ba.</p>
            </div>
        </>
    )
}
DieuKhoanDv.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
};
export default DieuKhoanDv