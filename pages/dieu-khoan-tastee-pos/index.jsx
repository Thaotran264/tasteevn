import React from 'react'
import Layout from "../../components/Layout";

const DieuKhoanDv = () => {
    return (
        <div className='container'>
            <p><strong>Quy định sử dụng phần mềm</strong></p>

            <p>Khách hàng cần phải đọc và đồng ý toàn bộ điều khoản sử dụng của Tastee POS.</p>

            <p>Chúng tôi có thể chỉnh sửa và bổ sung quy định về các điều khoản bất kỳ lúc nào. Chúng tôi mong rằng bạn sẽ thường xuyên xem lại điều khoản sử dụng để đảm bảo về quyền lợi của bạn trong quá trình sử dụng ứng dụng cũng như các quy định sử dụng và các quy định về thông tin đăng tải.</p>

            <p>Trong quá trình sử dụng, nếu khách hàng thực hiện xóa các thông tin, hình ảnh liên quan đế tài khoản của khách hàng thì sẽ không thể khôi phục được dữ liệu.</p>

            <p>Trong trường hợp khách hàng xóa tài khoản hoặc xóa cửa hàng thì mọi thông tin của khách hàng sẽ không được bảo lưu.</p>

            <p><strong>Quyền sử dụng</strong></p>

            <p>Khách hàng có thể sử dụng toàn bộ các chức năng của phần mềm hoặc tùy theo thỏa thuận đã ký kết của hợp đồng dịch vụ.</p>

            <p>Khách hàng có quyền cập nhật và điều chỉnh tất cả thông tin sau khi đã đăng nhập vào ứng dụng.</p>

            <p>Khách hàng có thể nhờ hỗ trợ tư vấn hoặc xem các hướng dẫn sử dụng phần mềm để hiểu thêm về cách sử dụng ứng dụng.</p>

            <p>Khách hàng có quyền xóa tài khoản hoặc xóa cửa hàng, trong trường hợp khách hàng xóa tài khoản hoặc cửa hàng thì mọi thông tin của khách hàng sẽ không được bảo lưu.</p>

            <p><strong>Trách nhiệm </strong></p>

            <p>Khách hàng không được sử dụng phần mềm với các mục đích sau:</p>

            <ul>
                <li>Không được đăng tải các nội dung liên quan đến bạo lực.</li>
                <li>Không được đăng tải các nội dung liên quan đến khiêu dâm.</li>
                <li>Không được đăng tải các nội dung với mục đích lừa đảo, quấy rối hoặc làm ảnh hưởng đến uy tín, danh dự của người khác.</li>
                <li>Không làm tổn hại, làm thương tổn và làm phiền người khác về con người và tài sản.</li>
                <li>Không cố tình phá hỏng dịch vụ bằng bất kì phương tiện máy móc hoặc phần mềm nào.</li>
                <li>Không vi phạm các quy định của pháp luật.</li>
            </ul>

            <p>Trong mọi trường hợp, Tastee POS sẽ không phải chịu trách nhiệm về những thiệt hại phát sinh từ việc khách hàng sử dụng dịch vụ của bên đối tác thứ ba.</p>

        </div>
    )
}
DieuKhoanDv.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
  };
export default DieuKhoanDv