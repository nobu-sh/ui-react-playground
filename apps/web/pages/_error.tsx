import type { ErrorProps } from 'next/error'

export default function Error({ statusCode }:  ErrorProps) {
  return (
    <div className="parent">
      <p>
        {statusCode
          ? `Error: ${statusCode}; occurred on server. Check the console output to create a bug report.`
          : 'A client sided error occured. Check the console output to create a bug report.'}
      </p>
    </div>
  )
}
