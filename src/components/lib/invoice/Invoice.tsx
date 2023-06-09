import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

import { useGetOrderPricesHooks } from '@/hooks';
import { useTimeFormatHook } from '@/hooks/useTimeFormakHook';

import ThrindleLogo from '@/components/shared/ThrindleLogo/ThrindleLogo';

import { IOrder } from '@/@types/appTypes';

const tableTitle = ['Product Name', 'Quantity', 'Price Per Unit', 'Total'];

const Invoice = ({ order }: { order: IOrder }) => {
  const { formattedDate } = useTimeFormatHook({
    date: order?.createdAt,
    format: 'Do MMMM YYYY',
  });
  const invoiceRef = useRef();

  const { data } = useSession();

  const objectDate = new Date();
  const month = objectDate.getMonth();

  const year = objectDate.getFullYear();

  const downloadPDF = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const input = invoiceRef.current as any;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 1;
        pdf.addImage(
          imgData,
          'PNG',
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save(
          `ThrindleServicesLimited - Invoice - ${year}/${month} - #${order?.orderRefCode} - ${order?.company?.companyName}`
        );
      })
      .catch(() => {
        toast.error('Error downloading invoice. Try again later.');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { deliveryFee, serviceCharge, getOrderSubTotal, getTotalAmount } =
    useGetOrderPricesHooks({ order });

  useEffect(() => {
    downloadPDF();
  }, [downloadPDF]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <div className='mx-auto w-full bg-white px-5 pt-10' ref={invoiceRef as any}>
      <div className=''>
        <ThrindleLogo variant='blue' />
      </div>
      {/* Content */}
      <div className='mt-10 w-full'>
        <h6 className='font-clash-grotesk text-xl font-semibold text-black/90'>
          Dear {order?.company?.companyName},
        </h6>
        <p className='font-clash-grotesk pt-4 text-base font-normal text-black/80'>
          Thank you for choosing Thrindle! We are pleased to provide you with
          the invoice for your recent order.
        </p>
        {/* Order details */}
        <div className='mb-8 mt-5 w-full'>
          <p className='font-clash-grotesk text-base font-medium'>
            Order Details:
          </p>
          <p className='font-clash-grotesk mt-5 text-base font-normal'>
            Order Number:&nbsp;&nbsp;
            <span className='font-medium'>#{order?.orderRefCode}</span>
          </p>
          <p className='font-clash-grotesk text-base font-normal'>
            Order Date:&nbsp;&nbsp;
            <span className='font-medium'>{formattedDate}</span>
          </p>
        </div>
        {/* Item Detials */}
        <div className='w-full'>
          <h6 className='font-clash-grotesk text-black/800 text-base font-medium'>
            Itemized Invoice
          </h6>
          {/*  Order Items */}
          <table className='mt-10 w-full'>
            <thead className='w-full rounded-sm '>
              <tr className='w-full bg-[#065DA7]/20'>
                {tableTitle.map((title, index) => (
                  <th
                    className='font-clash-grotesk  px-8 py-2 text-left text-sm font-medium text-black/60'
                    key={index}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=' w-full'>
              {order?.listItems?.map((item, index) => (
                <tr key={index}>
                  <td className='font-clash-grotesk px-8 py-3 text-base font-medium text-black/80'>
                    {item.name}
                  </td>
                  <td className='font-clash-grotesk px-8 py-3 text-base font-medium text-black/80'>
                    {item?.quantity}
                  </td>
                  <td className='font-clash-grotesk px-8 py-3 text-base font-medium text-black/80'>
                    N {item?.price?.toLocaleString() || 0.0}
                  </td>
                  {item.price ? (
                    <td className='font-clash-grotesk px-8 py-3 text-base font-medium text-black/80'>
                      N {Number(item?.quantity * item?.price).toLocaleString()}
                    </td>
                  ) : (
                    <td className='font-clash-grotesk px-8 py-3 text-base font-medium text-black/80'>
                      N 0.00
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Order Total */}
          <div className='mt-14 w-full'>
            <p className='font-clash-grotesk text-base font-normal text-black/60'>
              Sub Total: &nbsp;
              <span className='font-medium text-black/80'>
                {' '}
                N {getOrderSubTotal().toLocaleString()}
              </span>
            </p>
            <p className='font-clash-grotesk pt-2 text-base font-normal text-black/60'>
              Delivery Fee: &nbsp;
              {order && order?.deliveryFee ? (
                <span className='font-medium text-black/80'>
                  N {deliveryFee.toLocaleString()}
                </span>
              ) : (
                <span className='font-medium text-black/80'> N 0.00</span>
              )}
            </p>
            <p className='font-clash-grotesk pt-2 text-base font-normal text-black/60'>
              Service Charge: &nbsp;
              {order && order?.serviceCharge ? (
                <span className='font-medium text-black/80'>
                  N {serviceCharge.toLocaleString()}
                </span>
              ) : (
                <span className='font-medium text-black/80'> N 0.00</span>
              )}
            </p>
            <p className='font-clash-grotesk pt-5 text-base font-medium text-black/60'>
              Total Amount: &nbsp;
              <strong className='font-semibold text-black/80'>
                N {getTotalAmount().toLocaleString()}
              </strong>
            </p>
            <p className='font-clash-grotesk mt-5 font-medium text-black/80'>
              Payment can be made using your in-app wallet, load up your wallet
              with funds so you can pay for the goods.
            </p>
            {/* {order && order?.paymentDate && (
              <>
                <p className='font-clash-grotesk mt-2 font-normal text-black/60'>
                  Please ensure that the total amount is paid by the due date
                  mentioned below:
                </p>
                <p className='font-clash-grotesk  font-normal text-black/60'>
                  Due Date:{' '}
                  {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useTimeFormatHook({
                      date: order?.paymentDate,
                      format: 'Do MMMM YYYY',
                    }).formattedDate
                  }
                </p>
              </>
            )} */}
            <p className='py-2'>or</p>
            {/* Other account */}
            <div className='mt-5 w-full bg-[#065DA7]/10 px-4 py-6'>
              <p className='font-clash-grotesk font-medium text-slate-800'>
                Pay To:
              </p>
              {/* Content */}
              <div className='w-full'>
                <p className='font-clash-grotesk pt-2 text-base font-normal text-black/60'>
                  Account Number: &nbsp;
                  <span className='font-medium text-black/80'>1027088818</span>
                </p>
                <p className='font-clash-grotesk pt-2 text-base font-normal text-black/60'>
                  Account Name: &nbsp;
                  <span className='font-medium text-black/80'>
                    Thrindle Merchant Account
                  </span>
                </p>
                <p className='font-clash-grotesk pt-2 text-base font-normal text-black/60'>
                  Bank Name: &nbsp;
                  <span className='font-medium text-black/80'>
                    VFD Microfinance&nbsp;Bank
                  </span>
                </p>
                <p className='font-clash-grotesk pt-2 text-base font-normal text-black/60'>
                  Company Reference Code: &nbsp;
                  <span className='font-medium text-black/80'>
                    {data?.user?.company?.companyCode}
                  </span>
                </p>
                <p className='font-clash-grotesk text-primary-blue mt-2 font-medium '>
                  Make sure that you input your company reference code as
                  narration when making the transfer to identify your company.
                </p>
              </div>
            </div>

            <p className='font-clash-grotesk mt-10'>
              If you have any further questions or need assistance, please
              contact our support team at&nbsp;&nbsp;
              <a className='underline' href='mailto:thrindlesuupport@gmail.com'>
                info@thrindle.com
              </a>
              .
            </p>
            <p className='font-clash-grotesk text-primary-blue mt-4 font-normal text-black/60'>
              Thank you once again for your business. We appreciate your trust
              in Thrindle.
            </p>

            <p className='font-clash-grotesk mt-10 font-normal text-black/60'>
              Best Regards,
            </p>
            <p className='font-clash-grotesk mt-1 font-normal text-black/60'>
              Yinka, Founder
            </p>
            <p className='font-clash-grotesk mt-1 font-normal text-black/60'>
              Thrindle Services
            </p>
            <p className='font-clash-grotesk mt-1 font-normal text-black/60'>
              No. 10, Alagomeji Street, Maryland, Lagos
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
